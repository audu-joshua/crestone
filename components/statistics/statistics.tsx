import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PropertyWithMetrics } from '../../utils/types';

interface PropertyStatisticsProps {
  property: PropertyWithMetrics;
}

const PropertyStatistics: React.FC<PropertyStatisticsProps> = ({ property }) => {
  const metrics = property.financialMetrics;
  const monthlyData = metrics.monthlyMetrics;

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value: number): string => `${value.toFixed(2)}%`;

  return (
    <div className="space-y-6">
      {/* Key Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Projected Annual Revenue</h3>
          <p className="text-2xl font-bold">{formatCurrency(metrics.projectedAnnualRevenue)}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Operating Expense Ratio</h3>
          <p className="text-2xl font-bold">{formatPercent(metrics.operatingExpenseRatio)}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Cap Rate</h3>
          <p className="text-2xl font-bold">{formatPercent(metrics.capitalizationRate)}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Cash-on-Cash Return</h3>
          <p className="text-2xl font-bold">{formatPercent(metrics.cashOnCashReturn)}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">IRR</h3>
          <p className="text-2xl font-bold">{formatPercent(metrics.internalRateOfReturn)}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Gross Rent Multiplier</h3>
          <p className="text-2xl font-bold">{metrics.grossRentMultiplier.toFixed(2)}</p>
        </div>
      </div>

      {/* Appreciation Rate Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Property Appreciation Rate</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value: number) => `${value}%`} />
              <Tooltip formatter={(value: number) => [`${value}%`, 'Appreciation Rate']} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="appreciationRate" 
                stroke="#2563eb" 
                name="Appreciation Rate"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Vacancy Rate Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Vacancy Rate</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value: number) => `${value}%`} />
              <Tooltip formatter={(value: number) => [`${value}%`, 'Vacancy Rate']} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="vacancyRate" 
                stroke="#dc2626" 
                name="Vacancy Rate"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PropertyStatistics;

