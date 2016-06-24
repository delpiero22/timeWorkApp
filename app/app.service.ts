import {Http, Headers} from "@angular/http";
import {Injectable} from '@angular/core';
import * as faker from "faker";

import config from "./config";
import {Timework, TimeworkResponse, User, UserResponse, Error} from "./app.models";
import {timeworkDatas} from "./mockData";
import {GlobalVars} from "./services/globalVars";


@Injectable()
export class AppService {
    private timeworks: Array<Timework> = [];

    constructor(
        private _http: Http,
        private _globalVars: GlobalVars) {

        for (let i = 0; i < 100; i++) {
            const value: Timework = {
                id: i,
                date: faker.date.past(1, new Date()),
                location: faker.address.streetAddress() + ", " + faker.address.city()
            }
            this.timeworks.push(value);
        }
    }

    userLogin(empId: number, password: string): Promise<UserResponse> {
        if (empId === 100001) {

            if (password === "pass") {
                const response: UserResponse = {
                    data: {
                        avatar: faker.internet.avatar(),
                        name: faker.name.firstName() + " " + faker.name.lastName(),
                        email: faker.internet.email(),
                        cover: faker.image.abstract(300, 70),
                        token: "fake_token"
                    }
                }
                return Promise.resolve(response);
            } else {
                const response: UserResponse = {
                    error: {
                        name: "IdOrPassInvalidException"
                    }
                };
                return Promise.resolve(response);
            }
        } else {
            const response: UserResponse = {
                error: {
                    name: "UserNotFountException"
                }
            };
            return Promise.resolve(response);
        }
    }

    userLogout(empId: number) {
        return Promise.resolve({
            data: true
        });
    }

    fecthTimeworkList(filter: string = "", begin: number = 0, count: number = 20): Promise<TimeworkResponse> {
        try {
            let query = this.timeworks;
            if (filter) {
                query = query.filter((value, index, array) => {
                    return value.date.toISOString().startsWith(filter);
                });
            }

            query = query.slice(begin, begin + count);

            const response: TimeworkResponse = {
                data: query
            };
            return Promise.resolve(response);
        } catch (error) {
            const response: TimeworkResponse = {
                error: {
                    name: "TimeworkQueryException"
                }
            };
            return Promise.resolve(response);
        }
    }
}