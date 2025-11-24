import { TodosContext } from "@/contexts/TodosContext";
import { useContext } from "react";

export const useTodos = () => {
 const context = useContext(TodosContext);
 if (!context) {
    throw new Error("useTodos must be used within a TodosProvider");
 }
 return context;
};