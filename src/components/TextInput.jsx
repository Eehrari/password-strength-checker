
export default function TextInput({label, value, onChange, placeholder,type=""}){

    return(
        <div className="field">
            <label className="label">
                {label}
            </label>

            <input 
            className="input" 
            value={value} 
            onChange={(e)=> onChange(e.target.value)}
            type={type}
            />
        </div>
    )

}