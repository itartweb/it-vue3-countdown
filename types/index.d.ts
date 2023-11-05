import {App} from 'vue';

export interface ItCountdown {
  deadline?: string;
  deadlineISO?: string;
  deadlineDate?: string;
  countdownSize?: string;
  labelSize?: string;
  stop?: boolean;
  flipAnimation?: boolean;
  showDays?: boolean;
  showHours?: boolean;
  showMinutes?: boolean;
  showSeconds?: boolean;
  showLabels?: boolean;
  labels?: object;
  mainColor?: string;
  secondFlipColor?: string;
  mainFlipBackgroundColor?: string;
  secondFlipBackgroundColor?: string;
  labelColor?: string;
}

export default function install(app: App): void;
