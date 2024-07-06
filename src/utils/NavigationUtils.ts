import { RootStackParamList } from "Routes/Root";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}