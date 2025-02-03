import { useForm } from "react-hook-form";
export default function FormDemo() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const handleRegistration = (formdata) => {
        console.log("Form Submitted")
        console.log(formdata)
    };
    const handleError = (errors) => { };

    const registerOptions = {
        name: { required: "Name cannot blank" },
        email: { required: "Email cannot be blank" },
        number: { required: "Phone number must be required" },
        password: {
            required: "Password is required",
            minLength: {
                value: 10,
                message: "Password must be at least 10 chaaracters"
            }
        },
        quantity: {
            required: "QUANTITY IS reqquired",
            min: {
                value: 0,
                message: "Quantity must be greater than 0 ",
            },
            max: {
                value: 10,
                message: "Quantity must be less than 10"
            }
        }

    }

    return (
        <form action="" onSubmit={handleSubmit(handleRegistration, handleError)}>
            <div>
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    name="name"
                    {...register("name", registerOptions.name)}
                />
                <small className="text-danger">
                    {errors?.name && errors.name.message}
                </small>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input
                    type="email"
                    name="email"
                    {...register("email", registerOptions.email)}
                />
                <small className="text-danger">
                    {errors?.email && errors.email.message}
                </small>
            </div >
            <div>
                <label htmlFor="">mobile no</label>
                <input type="text"
                    name="number"
                    {...register("number", registerOptions.number)} />
                <small className="text-danger">
                    {errors?.number && errors.number.message}
                </small>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input
                    type="password"
                    name="password"
                    {...register("password", registerOptions.password)}
                />
                <small className="text-danger">
                    {errors?.password && errors.password.message}
                </small>
            </div>

            <div>
                <label htmlFor="">Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    {...register("quantity", registerOptions.quantity)}
                />
                <small className="text-danger">
                    {errors?.quantity && errors.quantity.message}
                </small>
            </div>


            <button>Submit</button>
        </form>
    );
}

