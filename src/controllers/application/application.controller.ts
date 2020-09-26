
import { Request, Response, NextFunction } from 'express';

interface Application {
    screens: [Screen];
}

interface Screen {
    id: String;
    title: String;
    type: Types;
    rows: Row[]
}

interface Row {
    title: String;
    type?: Types;
    list?: List[]
}

interface List {
    title: String;
    actionType?: String
    action?: Action
}

interface Action {
    id: String;
}

enum Types {
    Button = "button",
    List = "list",
    Text = "text",
    Navigation = "navigationview"
}

export const applicationController = (req: Request, res: Response, next: NextFunction) => {

    const listRows: List[] = [
        {
            title: "Test 1",
            actionType: "showScreen",
            action: { id: "string" }
        },
        {
            title: "Test 1",
            actionType: "showScreen",
            action: { id: "string" }
        },
        {
            title: "Test 1",
            actionType: "showScreen",
            action: { id: "string" }
        },
        {
            title: "Test 1",
            actionType: "showScreen",
            action: { id: "string" }
        },
        {
            title: "Test 1",
            actionType: "showScreen",
            action: { id: "string" }
        },
        {
            title: "Test 1",
            actionType: "showScreen",
            action: { id: "string" }
        },
        {
            title: "Test 1",
            actionType: "showScreen",
            action: { id: "string" }
        },
        {
            title: "Test 1",
            actionType: "showScreen",
            action: { id: "string" }
        },
        {
            title: "Test 1",
            actionType: "showScreen",
            action: { id: "string" }
        },
        {
            title: "Test 1",
            actionType: "showScreen",
            action: { id: "string" }
        },
        {
            title: "Test 1",
            actionType: "showScreen",
            action: { id: "string" }
        },
        {
            title: "Test 1",
            actionType: "showScreen",
            action: { id: "string" }
        },
        {
            title: "Test 1",
            actionType: "showScreen",
            action: { id: "string" }
        },
    ]

    const application: Application = {
        screens: [
            {
                id: "home",
                title: "Home",
                type: Types.Navigation,
                rows: [
                    {
                        title: "Rows",
                        type: Types.List,
                        list: listRows
                    },
                    {
                        title: "Button",
                        type: Types.Button
                    },
                    {
                        title: "Tekst",
                        type: Types.Text
                    }
                ]
            }
        ]
    }
    res.send(application);
};
