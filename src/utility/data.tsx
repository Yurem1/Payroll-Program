import PAYRATE from '@/files/pay_rate.json';
import { DEFAULT_FORM_DATA } from '@/utility/constants';

/**
 * Represents the form data for an employee.
 * @interface IForm
 */
export interface IForm {
    name: string;
    lastName: string;
    ssn: number;
    hoursWorked: number;
    payRate: number;
    shift: string;
}

/**
 * Represents the pay rate and hours for an employee.
 * @interface IPayrate
 */
interface IPayrate {
    payrate: number;
    hours: number;
}

/**
 * Represents an interface for actions.
 * @interface IAction
 */
interface IAction {
    [key: string]: string;
}

/**
 * Utility class for handling data operations.
 */
export default class Data {

    /**
     * The default data for the form.
     */
    public static readonly DEFAULT_DATA = DEFAULT_FORM_DATA;

    /**
     * The pay deduction percentage.
     */
    public static readonly PAY_DEDUCTION = .15

    /**
     * Reducer function for updating the form state based on the action.
     * @param state - The current form state.
     * @param action - The action to be performed on the form state.
     * @returns The updated form state.
     * @deprecated No longer useful in this project
     */
    public static reducer(state: IForm, action: IAction): IForm {

        for(const [stateKey] of Object.entries(state)) {
            for(const [actionKey] of Object.entries(action)) {
                if(stateKey === actionKey) {
                    return {
                        ...state, ...action
                    };
                }
            }
        }

        return state;
    }

    /**
     * Finds the payrate based on the given payrate key.
     * @param payrate - The payrate value.
     * @returns The corresponding payrate value.
     */
    public static findPayrate(payrate: string): number {

        for(const [key, { rate }] of Object.entries(PAYRATE)) {
            if(key === payrate) {
                return rate;
            }
        }
        
        return 0;
    }

    /**
     * Calculates the payrate based on the given rate and hours.
     * @param rate - The hourly rate from 1-5.
     * @param hours - The number of hours worked.
     * @returns The calculated payrate.
     */
    public static calculatePayrate({payrate, hours}: IPayrate): number {
        
        for(const [key, { rate }] of Object.entries(PAYRATE)) {
            if(key === payrate.toString()) {
                return (rate * hours) - (rate * hours) * Data.PAY_DEDUCTION;
            }
        }

        return 0;
    }

    /**
     * Capitalizes the first letter of a string.
     * @param value - The string to capitalize.
     * @returns The capitalized string.
     */
    public static capitalize(value: string): string {
        return value[0].toLocaleUpperCase().concat(
            value.substring(1)
        );
    }
}