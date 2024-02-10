import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import "./dynamictreemenu.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
const DynamicTreeMenu = () => {
  // const [clickedItemLabel, setClickedItemLabel] = useState("");
  // const handleItemClick = (label) => {
  //   setClickedItemLabel(label);
  // };
  const dynamicTree = {
    label: "Root",
    nodeId: "0",
    children: [
      {
        label: "Parent A",
        nodeId: "1",
        children: [
          {
            label: "Child A1",
            nodeId: "2",
            children: [],
          },
          {
            label: "Child Parent A2",
            nodeId: "3",
            children: [
              {
                label: "Child A21",
                nodeId: "4",
                children: [],
              },
              { label: "Child A22", nodeId: "5", children: [] },
            ],
          },
        ],
      },
      {
        label: "Parent B",
        nodeId: "6",
        children: [
          { label: "Child B1", nodeId: "7", children: [] },
          { label: "Child B2", nodeId: "8", children: [] },
          {
            label: "Child B3",
            nodeId: "9",
            children: [
              { label: "Child Parent B31", nodeId: "10", children: [] },
            ],
          },
        ],
      },
    ],
  };

  return (
    <Fragment>
      <Row>
        <Col lg={6} className="bg-warning">
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{
              height: "100%",
              overflowY: "auto",
            }}
          >
            <TreeItem nodeId="0" label="Root">
              {dynamicTree.children.map((tree) => (
                <TreeItem
                  key={tree.nodeId}
                  label={tree.label}
                  endIcon={tree.children.length === 0 ? <LastPageIcon /> : null}
                />
              ))}
            </TreeItem>

            {/* <TreeItem nodeId="0" label="Root">
              <TreeItem nodeId="1" label="Parent A">
                <TreeItem
                  nodeId="2"
                  label="Child A1"
                  endIcon={<LastPageIcon />}
                  onClick={() => handleItemClick("Child A1")}
                />
                <TreeItem nodeId="3" label="Child Parent A2">
                  <TreeItem
                    nodeId="4"
                    label="Child A21"
                    endIcon={<LastPageIcon />}
                    onClick={() => handleItemClick("Child A21")}
                  />
                  <TreeItem
                    nodeId="5"
                    label="Child A22"
                    endIcon={<LastPageIcon />}
                    onClick={() => handleItemClick("Child A22")}
                  ></TreeItem>
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="6" label="Parent B">
                <TreeItem
                  nodeId="7"
                  label="Child B1"
                  endIcon={<LastPageIcon />}
                  onClick={() => handleItemClick("Child B1")}
                />
                <TreeItem
                  nodeId="8"
                  label="Child B2"
                  endIcon={<LastPageIcon />}
                  onClick={() => handleItemClick("Child B2")}
                />
                <TreeItem nodeId="9" label="Child B3">
                  <TreeItem
                    nodeId="10"
                    label="Child Parent B31"
                    endIcon={<LastPageIcon />}
                    onClick={() => handleItemClick("Child B3")}
                  />
                </TreeItem>
              </TreeItem>
            </TreeItem> */}
          </TreeView>
        </Col>
        <Col lg={6} className="bg-info">
          {/* Add the new Col for the right area */}
          {/* <div className="right-area">
            {clickedItemLabel && (
              <Fragment>
                <h3>{clickedItemLabel}</h3>
                Leaf node content.
              </Fragment>
            )}
          </div> */}
        </Col>
      </Row>
      <Row>
        {/* <Col lg={12} className="bg-danger">
          {clickedItemLabel && <p>You are viewing: {clickedItemLabel}</p>}
        </Col> */}
      </Row>
    </Fragment>
  );
};

export default DynamicTreeMenu;
