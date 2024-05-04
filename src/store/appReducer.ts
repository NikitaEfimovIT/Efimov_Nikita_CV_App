import { CHANGE_BLUR, DefaultState } from "@src/store/appTypes";

const defaultState: DefaultState = {
  blur_is_active: false,
  current_skill_number: null,
};

export const appReducer = (state = defaultState, actions: any) => {
  switch (actions.type) {
    case CHANGE_BLUR:
      return {
        ...state,
        blur_is_active: !state.blur_is_active,
        current_skill_number: state.current_skill_number === actions.payload ? null : actions.payload,
      };
    default:
      return state;
  }
};
