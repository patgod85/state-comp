import React from 'react';

import { RouterStore } from './useCases/router.store';

export const MobxContext = React.createContext<RouterStore | null>(null);
