import React from "react";
import type { User } from "~/types";
import { Button, Loader } from ".";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";

interface SingleState {
  user: User | null;
  isLoading: boolean;
}
export class Single extends React.Component<{}, SingleState> {
  state: SingleState = {
    user: null,
    isLoading: true
  };

  async componentDidMount() {
    try {
      const userId = location.pathname.slice(1);
      const { data } = await axios.get<{ data: User; success: boolean; error: string | null }>(
        `http://localhost:3000/users/${userId}`
      );
      this.setState({ user: data.data, isLoading: false });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.error || "An unknown error occurred");
      }

      this.setState({ isLoading: false });
    }
  }

  handleDelete = async () => {
    try {
      const userId = location.pathname.slice(1);
      await axios.delete(`http://localhost:3000/users/${userId}`);
      window.location.href = "/";
    } catch (error) {
      if (error instanceof AxiosError) toast.error(error.response?.data?.error || "An unknown error occurred");
    }
  };

  render() {
    if (this.state.isLoading) return <Loader message="Loading user..." />;

    return (
      <div className="container mx-auto flex flex-col gap-4 py-4">
        <h1 className="text-4xl font-bold">User Details</h1>
        <pre className="rounded-md bg-gray-100 p-4 text-sm">
          <code>{JSON.stringify(this.state.user, null, 2)}</code>
        </pre>
        <Button variant="destructive" onClick={this.handleDelete} className="w-max">
          Delete
        </Button>
      </div>
    );
  }
}
