import TokenService from "../services/token.service";
import { toast } from "react-toastify";

export const formatDateMDY = (data) => {
  return new Date(`${data}`).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
};

export const roles = {
  admin: "admin",
  super_agent: "super_agent",
  agent: "agent",
  player: "player",
};

export const roleMemo = (position) => {
  const role = TokenService.getRole();
  if (role === roles.admin) {
    return {
      role,
      accessRole: [roles.super_agent, roles.agent, roles.player].includes(
        position
      ),
      position,
    };
  }
  if (role === roles.super_agent) {
    return {
      role,
      accessRole: [roles.agent, roles.player].includes(position),
      position,
    };
  }
  if (role === roles.agent) {
    return { role, accessRole: [roles.player].includes(position), position };
  }
};

export const accessRole = (role) => {
  if (role === roles.super_agent) {
    return ![roles.super_agent, roles.agent].includes(role);
  }
  if (role === roles.agent) {
    return ![roles.agent].includes(role);
  } else {
    return true;
  }
};

export const notify = (message) =>
  toast.success(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
