import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const AppTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  variant: 'scrollable',
  scrollButtons: 'auto',
  allowScrollButtonsMobile: true,
});

export const AppTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    color: '#7EA8B3',
    padding: '12px 8px',
    fontSize: '11px',
    fontWeight: '500',
    '&:hover': {
      color: 'rgba(0, 0, 0, 0.85)',
    },
    '&.Mui-selected': {
      color: '#333',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);

interface StyledTabProps {
  label: string;
}



