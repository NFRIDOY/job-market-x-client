import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


export default function TabContainer() {
    return (
        <div>
            <h1>TabContainer</h1>
            <div className="border-2">
                <Tabs>
                    <TabList>
                        <div className="flex mx-auto w-fit divide-red-600 divide-x-2 border-2 border-b-purple-600">
                            <Tab className={"text-red-600"}>Title 1</Tab>
                            <Tab>Title 2</Tab>
                        </div>
                    </TabList>

                    <div className="text-center">
                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}
