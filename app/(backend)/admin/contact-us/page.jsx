'use client';

import React, { useEffect, useState } from 'react';
import { createMRTColumnHelper } from 'material-react-table';
import toast from 'react-hot-toast';
import EnqTable from '../dashboard/EnqTable';

const Contact = () => {
  const [arenaData, setArenaData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const [rangeValue, setRangeValue] = useState('allData');
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: '',
  });

  // ================= FETCH DATA =================
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        let url = '/api/contact';

        // 🔹 Build query safely
        if (
          rangeValue === 'Between' &&
          dateRange.startDate &&
          dateRange.endDate
        ) {
          url += `?rangeValue=Between&startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`;
        } else if (rangeValue !== 'allData') {
          url += `?rangeValue=${rangeValue}`;
        } else {
          url += `?rangeValue=allData`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        console.log('API RESPONSE:', result); // 🔍 keep once for debug

        const dataArray = result?.data ?? [];

        const mappedData = dataArray.map((item) => ({
          ...item,
          createdAt: item.createdAt || item.created_at || null,
        }));

        setArenaData(mappedData);

        if (mappedData.length === 0) {
          toast.error('No contact enquiries found');
        } else {
          toast.success('Contact enquiries loaded');
        }
      } catch (error) {
        console.error('Fetch error:', error);
        toast.error('Failed to fetch contact enquiries');
        setArenaData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refreshing, rangeValue, dateRange.startDate, dateRange.endDate]);

  // ================= TABLE COLUMNS =================
  const columnHelper = createMRTColumnHelper();

  const columns = [
    {
      header: 'S.No',
      size: 60,
      accessorFn: (_, index) => index + 1,
      cell: (info) =>
        info.row.index +
        1 +
        info.table.getState().pagination.pageIndex *
          info.table.getState().pagination.pageSize,
    },
    columnHelper.accessor('name', {
      header: 'Name',
      size: 150,
    }),
    columnHelper.accessor('number', {
      header: 'Phone',
      size: 140,
    }),
    columnHelper.accessor('message', {
      header: 'Message',
      size: 220,
    }),
    columnHelper.accessor('createdAt', {
      header: 'Date',
      size: 120,
      cell: (info) => {
        const value = info.getValue();
        if (!value) return '-';
        return new Date(value).toLocaleDateString('en-IN');
      },
    }),
  ];

  // ================= UI =================
  return (
    <div className="bg-white min-h-[calc(100vh-25px)] p-3 rounded-lg mr-2 mt-1">
      <div className="px-4 min-h-40">
        <h5 className="my-4 text-xl font-semibold uppercase text-primaryBlue">
          Contact Enquiries
        </h5>

        <EnqTable
          data={arenaData}
          columns={columns}
          fileName="Contact-Enquiries"
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          dateRange={dateRange}
          setDateRange={setDateRange}
          refreshing={refreshing}
          setRefreshing={setRefreshing}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Contact;
