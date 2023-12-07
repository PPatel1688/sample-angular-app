import { MatTableDataSource } from "@angular/material/table";

export class MTableBase {
    id: any = new Date().valueOf()
    config: any = {
        primary: "",
        action: [
            { field: "view", display: "View", icon: "icon-view", disabled: "", tooltip: "" },
            { field: "edit", display: "Edit", icon: "icon-edit", disabled: "", tooltip: "" },
            { field: "delete", display: "Delete", icon: "icon-delete", disabled: "", tooltip: "" },
            { field: "download", display: "Download", icon: "icon-download", disabled: "", tooltip: "" }
        ],
        columns: [
        ],
        sort: {
            active: "",
            direction: "",
            disableClear: false
        },
        paginator: {
            size: 5,
            pageSize: [30, 60, 90],
            pageIndex: 0,
            hidePageSize: false
        },
        fileName: "ExcelFile"
    }
    total: any = 0;
    dataSource = new MatTableDataSource<any>([]);

    get sort() {
        return this.config.sort;
    }

    get columns() {
        return this.config.columns || [];
    }

    get dcolumns() {
        return this.columns.map((x: any) => x.field);
    }

    isColSortable(column: any) {
        return !(column.sort || false);
    }

    isColStyle(column: any) {
        return column.style || null;
    }
}