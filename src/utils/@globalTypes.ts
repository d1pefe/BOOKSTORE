import {KeyboardEvent, ReactNode} from "react";
import {ButtonTypes} from "../components/Button";
import {TabsNames} from "../components/Tabs/Tabs";

export type SinglePageTypes = {
    title: string;
    subtitle: string;
    authors: string;
    publisher: string;
    isbn10: string;
    isbn13: string;
    pages: string;
    year: string;
    rating: number;
    desc: string;
    price: string;
    image: string;
    url: string;
    pdf: object;
};

export type FavoriteCardTypes = {
    data: SinglePageTypes;
    count?: number;
};

export type ButtonProps = {
    title: string | ReactNode;
    onClick: any;
    types: ButtonTypes;
    disabled?: boolean;
    className?: string;
};

export type CardTypes = {
    title: string,
    subtitle: string,
    price: string,
    image: string,
    url: string,
    isbn13: string,
}

export type CardsType = {
    card: CardTypes;
}

export type CardListType = {
    cardList: CardTypes[];
}

export type InputProps = {
    title?: string;
    placeholder: string;
    inputType: string;
    disabled?: boolean;
    errText?: string;
    className?: string;
    onChange: (value: string) => void;
    value?: string;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export type ModalProps = {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;
};

export type SubscribeType = {
    className?: string;
}

type TabType = {
    key: TabsNames;
    title: string;
    disabled: boolean;
};

export type TabsProps = {
    data: TabType[];
    className?: string;
    onClick: (key: TabsNames) => void;
    activeTab: TabsNames;
};

export type TitleType = {
    title: string;
    className?: string;
}

export type GetSearchedPostsPayload = {
    page: number,
    query: string,
}

export type SetSearchedPostsPayload = {
    cardList: CardTypes[],
    postCounter: number,
}

