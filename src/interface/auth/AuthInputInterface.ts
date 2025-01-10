export interface AuthInputInterafce {
  secureOnPress?: () => void;
  label?: string;
  errorMsg?: string;
  mainContainerStyle?: any;
  labelStyle?: any;
  inputContainerStyle?: any;
  inputFieldStyle?: any;
  isSecure?: boolean;
  isIconShow?: boolean;
  onChangeText?: (text: string) => void; // Add this
  onBlur?: (e: any) => void; // Add this if you want to pass onBlur
  value?: string; // Add this if you want to pass value
  placeholder?: string; // Add this if you want to pass placeholder
}
