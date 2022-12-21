import Card from 'components/Card';
import Typography from 'components/Typography';
import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useTheme } from 'styled-components';

import { statisticsData } from './constants';
import { Container } from './styles';

const StatisticsCard = () => {
  const theme = useTheme();
  const [activeBarIndex, setActiveBarIndex] = useState(0);
  const [toolTipYPosition, setToolTipYPosition] = useState(0);

  const changeTooltipYPosition = (e: any) => {
    if (e.index === activeBarIndex) {
      setToolTipYPosition(e.height);
    }
    return <path />;
  };

  return (
    <Card marginTop={32} flexDirection='column' alignItems='flex-start' paddingRight={0}>
      <Typography fontWeight='bold'>Statistics</Typography>
      <Container>
        <Typography fontWeight='bold' fontSize='s'>
          My Own Report
        </Typography>
        <ResponsiveContainer width={950} height={360}>
          <BarChart
            width={950}
            height={360}
            data={statisticsData}
            barSize={16}
            onMouseMove={(e) => {
              if (e.activeTooltipIndex) {
                setActiveBarIndex(e.activeTooltipIndex);
              }
            }}
          >
            <defs>
              <linearGradient id='colorValue' x1='1' y1='-0.5' x2='1' y2='1.4'>
                <stop offset='30%' stopColor={theme.colors.gradient.primary.head} />
                <stop offset='95%' stopColor={theme.colors.gradient.primary.tail} />
              </linearGradient>
            </defs>

            <XAxis dataKey='name' axisLine={false} />
            <YAxis type='number' />
            <Tooltip
              cursor={false}
              position={{ y: -toolTipYPosition + 230 }}
              offset={-40}
              allowEscapeViewBox={{ x: true, y: true }}
            />
            <CartesianGrid strokeDasharray='3 3' vertical={false} />
            <Bar
              dataKey='value'
              fill='url(#colorValue)'
              radius={[10, 10, 0, 0]}
              label={changeTooltipYPosition}
            />
          </BarChart>
        </ResponsiveContainer>
      </Container>
    </Card>
  );
};

export default StatisticsCard;
