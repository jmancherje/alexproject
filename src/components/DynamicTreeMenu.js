import React, { Fragment } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
const DynamicTreeMenu = () => {
  return (
    <Fragment>
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
            <TreeItem nodeId="2" label="Child A1" endIcon={<LastPageIcon />} />
            <TreeItem nodeId="3" label="Child Parent A2">
              <TreeItem
                nodeId="4"
                label="Child A21"
                endIcon={<LastPageIcon />}
              />
              <TreeItem
                nodeId="5"
                label="Child A22"
                endIcon={<LastPageIcon />}
              ></TreeItem>
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="6" label="Parent B">
            <TreeItem nodeId="7" label="Child B1" endIcon={<LastPageIcon />} />
            <TreeItem nodeId="8" label="Child B2" endIcon={<LastPageIcon />} />
            <TreeItem nodeId="9" label="Child B3">
              <TreeItem
                nodeId="10"
                label="Child Parent B31"
                endIcon={<LastPageIcon />}
              />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>
    </Fragment>
  );
};

export default DynamicTreeMenu;
