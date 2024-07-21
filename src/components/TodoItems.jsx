import { dataIcon } from "../data/data";

const TodoItems = ({ text, id, time, toggle, isComplete, deleteTodo }) => {
  return (
    <>
      <div className="item-center mx-3 my-4 flex gap-2">
        <div
          onClick={() => toggle(id)}
          className="flex flex-1 cursor-pointer items-center"
        >
          <img
            src={isComplete ? dataIcon.tickIcon : dataIcon.notTickIcon}
            alt=""
            className="w-5 md:w-7"
          />
          <p
            className={`ml-4 flex items-center text-lg text-slate-700 decoration-slate-500 ${isComplete ? "line-through" : ""}`}
          >
            {text}
            <span className="ml-4 block text-xs text-slate-400 md:ml-5">
              {time}
            </span>
          </p>
        </div>
        <img
          src={dataIcon.deleteIcon}
          alt=""
          className="w-5 cursor-pointer md:w-7"
          onClick={() => deleteTodo(id)}
        />
      </div>
    </>
  );
};

export default TodoItems;
