import React from "react";
import { Component } from "react";
import { Button, Input, Label } from "~/components";

type Values = { email: string; password: string };
type Errors = Partial<Values>; // { email?: string; password?: string }

interface LoginState {
  errors: Errors;
  values: Values;
}

export class Login extends Component<{}, LoginState> {
  state: LoginState = {
    errors: {},
    values: { email: "", password: "" }
  };

  handleErrorOfField = (field: keyof Values) => {
    const value = this.state.values[field];
    const errors: Errors = { ...this.state.errors }; // { email: "email is required field" }

    console.log("value = ", value);

    if (value.length < 1) {
      errors[field] = `${field} is required field`;
    } else {
      delete errors[field];
    }

    return errors;
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errorsOfEmail = this.handleErrorOfField("email"); // HM_0002 { email: "email is required field" }
    const errorsOfPassword = this.handleErrorOfField("password"); // HM_0004 { password: "password is required field" }

    console.log("errorsOfEmail = ", errorsOfEmail);
    console.log("errorsOfPassword = ", errorsOfPassword);
    this.setState({ errors: { ...errorsOfEmail, ...errorsOfPassword } });
  };

  handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prev => ({ values: { ...prev.values, email: e.target.value } }));
  };

  handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prev => ({ values: { ...prev.values, password: e.target.value } }));
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container mx-auto my-2 space-y-2">
        <h1 className="text-2xl font-bold">Login</h1>
        <form className="space-y-4" onSubmit={this.handleSubmit}>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="email">Email</Label>
            <div className="flex flex-col">
              <Input
                type="email"
                id="email"
                placeholder="Email"
                value={this.state.values.email}
                onChange={this.handleChangeEmail}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="password">Password</Label>
            <div className="flex flex-col">
              <Input
                type="password"
                id="password"
                placeholder="Password"
                value={this.state.values.password}
                onChange={this.handleChangePassword}
              />
              {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
            </div>
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    );
  }
}
