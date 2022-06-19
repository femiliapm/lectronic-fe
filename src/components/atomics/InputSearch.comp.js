import React from "react";
import { BsSearch } from "react-icons/bs";
import { InputSearchStyled } from "../../styles/components/inputSearch.style";

const InputSearch = (props) => {
  const { className } = props;

  return (
    <InputSearchStyled className={className}>
      <input type={"text"} placeholder="Tap To Search For Something" />
      <button className="bg-primary">
        <BsSearch size={20} className="stroke-white" />
      </button>
    </InputSearchStyled>
  );
};

export default InputSearch;
