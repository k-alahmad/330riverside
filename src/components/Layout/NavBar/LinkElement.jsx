const LinkElement = ({ name, link, styled, onClick, selectedLink }) => {
  return (
    <div
      className={`pb-[8px]  ${
        link == selectedLink
          ? "border-b-4 border-[#B28A5D] text-[#B28A5D] font-bold"
          : "text-lightBlack font-medium"
      }`}
      onClick={onClick}
    >
      <p className={`px-1 cursor-pointer text-med ${styled}`}>{name}</p>
    </div>
  );
};

export default LinkElement;
