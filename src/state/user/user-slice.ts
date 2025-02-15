import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress, getPosition } from "../../services/api-geocoding";
import { formatAddress } from "../../utils/utils";

export interface UserState {
  username: string;
  status: string;
  position: Record<string, string>;
  address: string;
  addressError: string;
}

interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
}

interface AddressData {
  position: {
    lat: string;
    long: string;
  };
  address: string;
}

const initialState: UserState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  addressError: "",
};

export const fetchAddress = createAsyncThunk<AddressData>(
  "user/fetchAddress",
  async () => {
    const position: Position = await getPosition();
    const lat = position.coords.latitude.toString();
    const long = position.coords.longitude.toString();

    const address = await getAddress(lat, long);
    const formatedAddress = formatAddress(address);

    return {
      position: {
        lat,
        long,
      },
      address: formatedAddress,
    };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = "error";
        state.addressError =
          "There was a problem getting your address. Make sure to fill this field!";
      });
  },
});

export const { setUsername } = userSlice.actions;

export default userSlice.reducer;
