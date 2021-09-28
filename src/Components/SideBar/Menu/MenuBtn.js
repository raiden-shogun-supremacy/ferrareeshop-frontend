const MenuBtn = ({ detail }) => {
    return (
        <div>
            <button>
                <img src={detail.icon} />
                {detail.name}
            </button>
        </div>
    );
}

export default MenuBtn;