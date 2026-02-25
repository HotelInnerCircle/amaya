'use client';

import React, { useEffect, useState } from 'react';
import { createMRTColumnHelper } from 'material-react-table';
import toast from 'react-hot-toast';
import EnqTable from '../dashboard/EnqTable';

const EmailLeads = () => {
  const [emailData, setEmailData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const [rangeValue, setRangeValue] = useState('allData');
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: '',
  });

  // ================= FETCH EMAIL LEADS =================
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch('/api/email');

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const result = await response.json();
        console.log('EMAIL API RESPONSE:', result);

        const mappedData = (result?.data || []).map((item) => ({
          ...item,
          createdAt: item.createdAt || null,
        }));

        setEmailData(mappedData);

        if (mappedData.length === 0) {
          toast.error('No email leads found');
        } else {
          toast.success('Email leads loaded');
        }
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch email leads');
        setEmailData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refreshing]);

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
    columnHelper.accessor('email', {
      header: 'Email Address',
      size: 300,
    }),
    columnHelper.accessor('createdAt', {
      header: 'Date',
      size: 140,
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
          Email Enquiries
        </h5>

        <EnqTable
          data={emailData}
          columns={columns}
          fileName="Email-Enquiries"
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

export default EmailLeads;
