import React from "react";
import { people } from "react-icons-kit/iconic/people";
import { person } from "react-icons-kit/iconic/person";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllUsersQuery } from "../../apiServices/usersService";
import { setSelectedUser } from "../../redux/folderTree/folderTreeSlice";
import ToggleList from "./ToggleList";

const Collaborators = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data: collaborators,
    isLoading,
    isFetching,
  } = useGetAllUsersQuery("collaborator");
  const handleClick = (user) => {
    dispatch(setSelectedUser(user));
    navigate(`share/${user._id}`);
  };
  return (
    <ToggleList
      icon={people}
      label="Collaborators"
      iconSize={17}
      listItems={collaborators}
      itemIcon={person}
      onItemClick={handleClick}
      isLoading={isLoading || isFetching}
    />
  );
};

export default Collaborators;
