"use client";
import { useState } from "react";
import { Paginator } from "primereact/paginator";
import { LocationsTable } from "../components/locations/LocationsTable";
import PageLayout from "../components/page-layout/PageLayout";
export default function Locations() {
  const [page, setPage] = useState(0);
  const rows = 15;
  const [totalRecords, setTotalRecords] = useState(0);

  const handlePageChange = (e) => {
    setPage(e.page);
  };

  return (
    <PageLayout
      pageName="All Locations"
      headerRightComponent={
        <Paginator
          first={page * rows}
          rows={rows}
          totalRecords={totalRecords || 1} //  to handle no records case
          onPageChange={handlePageChange}
          template={{ layout: "PrevPageLink CurrentPageReport NextPageLink" }}
          currentPageReportTemplate="{currentPage} of {totalPages} pages"
        />
      }
    >
      <LocationsTable
        page={page + 1}
        rows={rows}
        setTotalRecords={setTotalRecords}
      />
    </PageLayout>
  );
}
