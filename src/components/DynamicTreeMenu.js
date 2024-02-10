import React, { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import "./dynamictreemenu.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
const DynamicTreeMenu = () => {
  const [clickedItemLabel, setClickedItemLabel] = useState("");
  const handleItemClick = (label) => {
    setClickedItemLabel(label);
  };

  return (
    <Fragment>
      <Col>
        {clickedItemLabel && <p>You are viewing: {clickedItemLabel}</p>}
      </Col>
      <Col>
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
          </TreeItem>
        </TreeView>
      </Col>
    </Fragment>
  );
};

export default DynamicTreeMenu;
