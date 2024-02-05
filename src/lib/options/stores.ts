import { writable } from 'svelte-local-storage-store';
import { defaultOptions } from './defaultOptions';

export const options = writable('options', defaultOptions);

export const userDefaultOptions = writable('userDefaultOptions', defaultOptions);

export const FormToggle = writable("FormToggle", true);
export const PeopleList = writable("PeopleList", "");
