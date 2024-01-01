import React from 'react'
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import Divider from "../../components/Divider";
function index() {
  return (
    <div className="grid grid-cols-2">
    <div className="bg-primary h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="text-7xl text-white">TASK-HARBOR</h1>
        <span className=" text-white mt-5">
          One place to track all your business records
        </span>
      </div>
    </div>
    <div className="flex justify-center items-center">
      <div className="w-[420px]">
        <h1 className="text-2xl text-gray-700 uppercase">
          Lets get you started
        </h1>
        <Divider />
        <Form layout="vertical">
          <Form.Item
            label="First Name"
            name="firstName"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
          >
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
          >
            <Input type="password" />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
          >
            Register
          </Button>

          <div className="flex justify-center mt-5">
            <span>
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  </div>
  )
}

export default index
