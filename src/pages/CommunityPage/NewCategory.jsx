import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const NewCategory = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => postTopicCategory(data);

  const postTopicCategory = async (payload) => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/community/topics/category`,
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();
    if (!data.success) {
      return toast.error(data.msg);
    }
    toast.success(data.msg);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm md:max-w-xl mx-auto"
      >
        <div className="mb-5">
          <label htmlFor="title" className="block mb-2 text-sm font-medium ">
            Category Name
          </label>
          <input
            name="name"
            type="text"
            className="bg-gray-50 border border-gray-[#18BB0C] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            {...register("name")}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default NewCategory;
