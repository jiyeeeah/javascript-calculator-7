import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "./constants/messages.js";

const InterfaceUtil = {
  inputStringAsync() {
    try {
      return Console.readLineAsync(MESSAGES.INPUT);
    } catch (error) {
      throw new Error(MESSAGES.ERROR);
    }
  },

  printResult(sum) {
    Console.print(MESSAGES.RESULT + sum);
  },
};

export default InterfaceUtil;
