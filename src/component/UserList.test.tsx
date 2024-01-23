import { render, screen } from "@testing-library/react";
import { UserList } from "./UserList";

describe("UserList", () => {
  it("renders user list", () => {
    const users = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];

    render(<UserList users={users} />);
    const userList = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    expect(userList).toBeInTheDocument();
    expect(listItems).toHaveLength(2);
  });
});
