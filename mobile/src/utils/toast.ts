import Toast from "react-native-toast-message";

export function showSuccess(message: string) {
  Toast.show({
    type: "success",
    text1: message,
    position: "top",
    visibilityTime: 2200,
  });
}

export function showError(message: string) {
  Toast.show({
    type: "error",
    text1: message,
    position: "top",
    visibilityTime: 2600,
  });
}

export function showInfo(message: string) {
  Toast.show({
    type: "info",
    text1: message,
    position: "top",
    visibilityTime: 2200,
  });
}
