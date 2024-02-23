import PAYRATE from '@/files/pay_rate.json';
import { DEFAULT_FORM_DATA } from '@/utility/constants';

/**
 * Represents the form data for an employee.
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
     * Reducer function for updating the form state based on the action.
     * @param state - The current form state.
     * @param action - The action to be performed on the form state.
     * @returns The updated form state.
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
     * @param payrate - The payrate key.
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
     * Calculates the pay rate based on the provided form data.
     * @param {IForm} formData - The form data containing the pay rate and hours worked.
     * @returns {number} - The calculated pay rate.
     */
    public static calculatePayrate({payRate, hoursWorked}: IForm): number {

        for(const [key, { rate }] of Object.entries(PAYRATE)) {
            if(key === payRate.toString()) {
                return (rate * hoursWorked) - (rate * hoursWorked * .15);
            }
        }

        return 0;
    }

    public static capitalize(value: string): string {
        return value[0].toLocaleUpperCase().concat(
            value.substring(1)
        );
    }
}