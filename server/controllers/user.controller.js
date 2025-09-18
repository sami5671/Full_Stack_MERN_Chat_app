import { catchAsyncError } from "./../middlewares/catchAsyncError.middleware.js";

export const signup = catchAsyncError(async (req, res) => {});
export const signin = catchAsyncError(async (req, res) => {});
export const signout = catchAsyncError(async (req, res) => {});
export const getUser = catchAsyncError(async (req, res) => {});
export const updateProfile = catchAsyncError(async (req, res) => {});
