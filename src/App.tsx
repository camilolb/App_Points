import AppNavigation from './mobile/Navigation/AppNavigation';
import {QueryClient, QueryClientProvider} from 'react-query';
import {useChangeTheme} from './core/hooks';
import {MainService} from './core/services/MainService';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LoadingProvider} from './mobile/context/LoadingContext';
import {Provider} from 'jotai';
import React from 'react';

const queryClient = new QueryClient();
new MainService();

function App() {
  const {shouldRender} = useChangeTheme();

  if (shouldRender) {
    return (
      <SafeAreaProvider>
        <Provider>
          <LoadingProvider>
            <QueryClientProvider client={queryClient} contextSharing={true}>
              <AppNavigation />
            </QueryClientProvider>
          </LoadingProvider>
        </Provider>
      </SafeAreaProvider>
    );
  } else {
    return null;
  }
}

export default App;
