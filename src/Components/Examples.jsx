import { useState } from "react";

import TabButton from "./TabButton.jsx";

import { EXAMPLES } from "../data.js";

import Section from "./Section.jsx";

import Tab from "./Tab.jsx";

export default function Examples() {
    const [SelectedTopic, setSelectedTopic] = useState();
    function HandleSelect(selectedButton) {
        // selectedButton => 'Components','JSX','Props','State'
        setSelectedTopic(selectedButton);
        console.log(SelectedTopic);
    }

    let tabContent = <p>Please select a topic</p>;
    if (SelectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[SelectedTopic].title}</h3>
                <p>{EXAMPLES[SelectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[SelectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section title="Examples" id="examples">
            <Tab
                buttons={
                    <>
                        <TabButton
                            isSelected={SelectedTopic === "components"}
                            onClick={() => HandleSelect("components")}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={SelectedTopic === "jsx"}
                            onClick={() => HandleSelect("jsx")}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={SelectedTopic === "props"}
                            onClick={() => HandleSelect("props")}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={SelectedTopic === "state"}
                            onClick={() => HandleSelect("state")}
                        >
                            State
                        </TabButton>
                    </>
                }
            />
            {tabContent}
        </Section>
    );
}
