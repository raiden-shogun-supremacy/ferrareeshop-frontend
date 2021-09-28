const MenuBtn = ({ detail, onBtnClick }) => {

    return (
        <div>
            <button onClick={() => onBtnClick(detail.name)}>
                <img src={detail.icon} />
                {detail.name}
            </button>
        </div>
    );
}

export default MenuBtn;