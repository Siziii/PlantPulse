const SelectVariantButton = ({ onClick, image, selected, variant }) => {
    return (
        <div
            className={`w-[30%] sm:w-[5.5rem] bg-primary cursor-pointer rounded-lg p-1 transform transition-transform hover:scale-105 hover:brightness-105 ${selected ? 'scale-105' : ''}`}
            onClick={() => onClick(image, variant)}>
            <img src={image} alt="" />
        </div>
    );
};

export default SelectVariantButton;
