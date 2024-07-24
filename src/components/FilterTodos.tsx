import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
`;

interface FilterTodosProps {
    setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

enum Filter {
    All = 'all',
    Active = 'active',
    Completed = 'completed',
}

const FilterTodos: React.FC<FilterTodosProps> = ({ setFilter }) => {
    return useMemo(
        () => (
            <StyledDiv>
                <Button variant='contained' onClick={() => setFilter(Filter.All)}>
                    Show all tasks
                </Button>
                <Button variant='contained' onClick={() => setFilter(Filter.Active)}>
                    Show active tasks
                </Button>
                <Button variant='contained' onClick={() => setFilter(Filter.Completed)}>
                    Show completed tasks
                </Button>
            </StyledDiv>
        ),
        [setFilter]
    );
};

export default FilterTodos;
