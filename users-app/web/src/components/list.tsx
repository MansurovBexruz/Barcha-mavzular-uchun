import React from "react";
import type { User } from "~/types";
import { Button, Loader, Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from ".";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";

interface ListState {
  users: User[];
  isLoading: boolean;
}
export class List extends React.Component<{}, ListState> {
  state: ListState = {
    users: [],
    isLoading: true
  };

  handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      this.setState(({ users }) => ({ users: users.filter(user => user.id !== id) }));
    } catch (error) {
      if (error instanceof AxiosError) toast.error(error.response?.data?.error || "An unknown error occurred");
    }
  };

  handleView = (id: number) => {
    window.location.href = `/${id}`;
  };

  handleNewUser = async () => {
    try {
      const { data } = await axios.post<{ data: User; success: boolean; error: string | null }>(
        "http://localhost:3000/users",
        {
          name: "Sherlock Holmes" + Math.random(),
          username: "sherlock_holmes_bio" + Math.random(),
          email: "sherlock@holmes.com",
          address: {
            street: "Baker Street",
            suite: "21",
            city: "London",
            zipcode: "65817"
          },
          phone: "+998 99 896 13 48",
          website: "https://sherlockholmes.net"
        }
      );
      this.setState(({ users }) => ({ users: [...users, data.data] }));
    } catch (error) {
      if (error instanceof AxiosError) toast.error(error.response?.data?.error || "An unknown error occurred");
    }
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get<{ data: User[]; success: boolean; error: string | null }>(
        "http://localhost:3000/users"
      );
      this.setState({ users: data.data, isLoading: false });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred");
      }

      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading) return <Loader message="Loading users..." />;

    if (this.state.users.length === 0)
      return (
        <div className="container mx-auto py-4">
          <h1>No users found</h1>
        </div>
      );

    return (
      <div className="container mx-auto flex flex-col gap-4 py-4">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold">Users</h1>
          <Button onClick={this.handleNewUser}>New User</Button>
        </div>
        <Table>
          <TableCaption>List of users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Website</TableHead>
              <TableHead className="w-[200px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {[user.address.street, user.address.suite, user.address.city, user.address.zipcode].join(", ")}
                </TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.website}</TableCell>
                <TableCell className="flex gap-2">
                  <Button variant="outline" onClick={() => this.handleView(user.id)}>
                    View
                  </Button>
                  <Button variant="destructive" onClick={() => this.handleDelete(user.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

/**
 * {
    "name": "Sherlock Holmes",
    "username": "sherlock_holmes_bio",
    "email": "sherlock@holmes.com",
    "address": {
        "street": "Baker Street",
        "suite": "21",
        "city": "London",
        "zipcode": "65817"
    },
    "phone": "+998 99 896 13 48",
    "website": "https://sherlockholmes.net"
}
 */
