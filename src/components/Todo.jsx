import TodoItems from "./TodoItems";

import { dataIcon } from "../data/data";
import { useEffect, useRef } from "react";
import { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos")).map((todo) => {
          return { ...todo, time: new Date(todo.time) };
        })
      : [],
  );
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    //* trim() untuk menghapus spasi di awal dan di akhir teks

    if (inputText === "") {
      alert("Data kosong! Masukkan data sekarang");
      return;
    }

    const newTodo = {
      id: Date.now(),
      time: new Date(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      add();
    }
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <div className="flex min-h-screen w-full flex-col place-self-center rounded-xl bg-[url('assets/belanja.jpg')] bg-cover bg-center bg-no-repeat p-5 md:min-h-[550px] md:w-11/12 md:max-w-md md:p-6">
        {/* Title Start */}
        <div className="mx-auto mt-5 flex items-center gap-2 md:mx-0 md:mt-7">
          <img className="w-8" src={dataIcon.todoIcon} alt="" />
          <h1 className="text-xl font-bold md:text-3xl">Catatan Belanjaku</h1>
        </div>
        {/* Title End */}

        {/* Input Box Start */}
        <div className="my-7 flex items-center rounded-e-full bg-gray-200">
          <input
            ref={inputRef}
            className="border-1 h-10 flex-1 bg-transparent pl-3 pr-2 outline-none placeholder:text-sm placeholder:text-slate-600 md:h-14 md:pl-6"
            type="text"
            placeholder="Masukkan daftar belanjamu..."
            onKeyDown={handleKeyPress}
          />
          <button
            className="font-xs h-10 rounded-full border-none bg-orange-600 px-2 text-sm text-white md:h-14 md:w-32 md:text-lg"
            onClick={add}
          >
            Tambahkan
          </button>
        </div>
        {/* Input Box End */}

        {/* Todo List Start */}
        <div className="w-full rounded-xl bg-white">
          {todoList.map((item, i) => {
            return (
              <TodoItems
                key={i}
                text={item.text}
                id={item.id}
                time={item.time.toLocaleTimeString()}
                isComplete={item.isComplete}
                deleteTodo={deleteTodo}
                toggle={toggle}
              />
            );
          })}
        </div>
        {/* Todo List End */}
      </div>
    </>
  );
};

export default Todo;
