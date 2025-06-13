const ToggleSwitch = ({ name, checked, onChange }) => {
    return (
        <div className="relative inline-block w-12 h-6">
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                className="sr-only"
            />
            <div
                className={`block w-12 h-6 rounded-full cursor-pointer transition-colors ${
                    checked ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => onChange({ target: { name, type: 'checkbox', checked: !checked } })}
            >
                <div
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                        checked ? 'transform translate-x-6' : ''
                    }`}
                />
            </div>
        </div>
    );
};

export default ToggleSwitch;