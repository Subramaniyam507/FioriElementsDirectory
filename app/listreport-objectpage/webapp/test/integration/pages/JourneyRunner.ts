import JourneyRunner from "sap/fe/test/JourneyRunner";
import ListReport from "sap/fe/test/ListReport";
import ObjectPage from "sap/fe/test/ObjectPage";
import CustomRootEntitiesList from "./RootEntitiesList";
import CustomRootEntitiesObjectPage from "./RootEntitiesObjectPage";

const runner = new JourneyRunner({
    launchUrl: sap.ui.require.toUrl("com/subbu/listreportobjectpage") + "/test/flp.html#app-preview",
    pages: {
        onTheRootEntitiesList: new ListReport(
            {
                appId: "com.subbu.listreportobjectpage",
                componentId: "RootEntitiesList",
                entitySet: "",
                contextPath: "/RootEntities"
            },
            CustomRootEntitiesList
        ),
        onTheRootEntitiesObjectPage: new ObjectPage(
            {
                appId: "com.subbu.listreportobjectpage",
                componentId: "RootEntitiesObjectPage",
                entitySet: "",
                contextPath: "/RootEntities"
            },
            CustomRootEntitiesObjectPage
        )
    },
    async: true
});

export default runner;
