

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LOADING = 'loading'
}
export enum ButtonVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  TEXT = 'text'
}

export enum ButtonTag {
  BUTTON = 'button',
  ANCHOR = 'a'
}

export enum ButtonTarget {
  BLANK = '_blank',
  SELF = '_self',
}

export interface ButtonProps {
  buttonTag: ButtonTag;
  type: ButtonType;
  variant: ButtonVariant;
  style?: Record<string, string>;
  disabled?: boolean;
  href?: string;
  target?: ButtonTarget;
}
