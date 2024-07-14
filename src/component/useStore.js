
import { create } from "zustand";

const useStore = create((set) => ({
  courses: [],
  inpuValue:"",
  addInpu:(intext)=>{
    set((state)=>({
        inpuValue: intext
    }))
  },
  addCourse: (cour) => {
    set((state) => ({
        courses: [...state.courses, cour],
        inpuValue: ""

    }));
  },
  removeCourse: (ind) => {
    set((state) => ({
      courses: state.courses.filter((elem, key) => ind !== key)
    }));
  },
  removeAll: () => {
    set(() => ({
      courses: []
    }));
  }
}));

export default useStore;
