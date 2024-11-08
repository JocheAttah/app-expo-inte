import {
  Dimensions,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/constants/Colors';
import { SelectList } from 'react-native-dropdown-select-list';
import { lagosLGAs, timeCards } from '@/constants/dummyData';
import { Controller, useForm } from 'react-hook-form';
import Checkbox from 'expo-checkbox';
import {
  AfterNoonIcon,
  DateIcon,
  EveningIcon,
  MorningIcon,
  TwentyFourIcon,
} from '@/components/svgs';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

const TestScreen = () => {
  const [mode, setMode] = useState(0);
  const [timeMode, setTimeMode] = useState(0);
  const [selectedLga, setSelectedLga] = useState('');
  const [isOnDate, setIsOnDate] = useState(false);
  const [whenDue, isWhenDue] = useState(false);
  const [isFlexible, setIsFlexible] = useState(false);
  const [specifics, setSpeccifics] = useState(false);
  const [isFinal, setIsFinal] = useState(false);
  const [show, setShow] = useState(false);
  const [onDateTiming, setOnDateTiming] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setDate] = useState(new Date());

  const [isFocusedHouse, setIsFocusedHouse] = useState(false);
  const [isFocusedBusStop, setIsFocusedBusStop] = useState(false);
  const [isFocusedLandmarks, setIsFocusedLandmarks] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    // setDate(currentDate);
    setSelectedDate(currentDate);
    setOnDateTiming(true);
    setIsFinal(true);
    console.log('selectedDate', currentDate);
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      house: '',
      bus_stop: '',
      landmarks: '',
    },
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        paddingTop: Platform.OS === 'ios' ? 50 : 30,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        flex: 1,
        paddingBottom: 100,
      }}
      //   contentContainerStyle={{
      //     flex: 1,
      //   }}
    >
      {/* Page Title */}
      <View style={{ marginTop: 56 }}>
        <Text style={{ fontSize: 30, fontFamily: 'HelveticaNeueBold' }}>
          Location & Date
        </Text>
        <Text style={{ fontSize: 14, fontFamily: 'AvenirLight', marginTop: 9 }}>
          Select the category that best fits your needs.
        </Text>
      </View>

      {/* Top Cards */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 40,
        }}
      >
        <Pressable
          onPress={() => {
            setMode(1);
            // setSelectedDate(null);
            // // setDate(null);
            isWhenDue(false);
            setIsFlexible(false);
            setOnDateTiming(false);
            setIsOnDate(false);
            setIsFinal(false);
            setShow(false);
            setSpeccifics(false);
            reset();
            setSelectedLga('');
            setTimeMode(0);
          }}
        >
          <View
            style={{
              backgroundColor: mode === 1 ? Colors.primary : '#f5f5f5',
              width: Dimensions.get('screen').width / 2.3,
              paddingHorizontal: 10,
              paddingVertical: 14,
              borderRadius: 8,
              height: 154,
            }}
          >
            {mode === 1 ? (
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 50,
                    backgroundColor: '#fff',
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: '#DBDBDB',
                }}
              />
            )}
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'HelveticaNeueBold',
                  marginBottom: 10,
                  marginTop: 15,
                  color: mode === 1 ? '#fff' : Colors.text,
                }}
              >
                Residential Service
              </Text>
              <Text
                style={{
                  fontFamily: 'AvenirMedium',
                  fontSize: 12,
                  maxWidth: 150,
                  color: mode === 1 ? '#fff' : Colors.text,
                  lineHeight: 16.39,
                }}
              >
                Select this if you need the task done at a particular location
                of your choice
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            setMode(2);
            isWhenDue(true);
            setShow(false);
            setIsOnDate(false);
            setIsFlexible(false);
            setOnDateTiming(false);
            setSpeccifics(false);
            setIsFinal(false);
            reset();
            setSelectedLga('');
            setTimeMode(0);

            // setDate(null);
            // setSelectedDate(null);
          }}
        >
          <View
            style={{
              backgroundColor: mode === 2 ? Colors.primary : '#f5f5f5',
              width: Dimensions.get('screen').width / 2.3,
              paddingHorizontal: 10,
              paddingVertical: 14,
              borderRadius: 8,
              height: 154,
            }}
          >
            {mode === 2 ? (
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 50,
                    backgroundColor: '#fff',
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: '#DBDBDB',
                }}
              />
            )}
            <View>
              <Text
                style={{
                  marginTop: 15,
                  marginBottom: 10,
                  fontSize: 14,
                  fontFamily: 'HelveticaNeueBold',
                  color: mode === 2 ? '#fff' : Colors.text,
                }}
              >
                On-Site Service
              </Text>
              <Text
                style={{
                  fontFamily: 'AvenirMedium',
                  fontSize: 12,
                  maxWidth: 150,
                  color: mode === 2 ? '#fff' : Colors.text,
                  lineHeight: 16.39,
                }}
              >
                Select this if you are more happy to go to the registered
                business address
              </Text>
            </View>
          </View>
        </Pressable>
      </View>

      {/* Mode === 1 */}
      {mode === 1 && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontFamily: 'AvenirLight', fontSize: 16 }}>
            Where do you want the task done?
          </Text>
          {/* Form */}
          <View style={{ marginTop: 8 }}>
            {/* LGA */}
            <>
              <SelectList
                setSelected={(val) => {
                  setSelectedLga(val);
                  isWhenDue(true);
                }}
                data={lagosLGAs}
                placeholder="Local government"
                boxStyles={styles.box}
                inputStyles={{
                  color: Colors.text,
                  fontSize: 14,
                  borderWidth: 0,
                }}
                dropdownTextStyles={{
                  color: '#4E4C4C',
                  fontSize: 12,
                }}
                dropdownStyles={{
                  marginTop: 0,
                  backgroundColor: '#F5F5F5',
                  borderWidth: 0,
                  marginBottom: 8,
                }}
              />
            </>
            {selectedLga.length > 1 && (
              <>
                {/* House address  */}
                <>
                  <Controller
                    control={control}
                    rules={{
                      required: 'House address is required',
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <>
                        <TextInput
                          autoCapitalize="none"
                          keyboardType="default"
                          inputMode="text"
                          style={[
                            styles.textInput,
                            isFocusedHouse && styles.inputFocused,
                          ]}
                          // onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                          placeholder="House address"
                          placeholderTextColor={'#838282'}
                          onBlur={() => {
                            onBlur();
                            setIsFocusedHouse(false);
                          }}
                          onFocus={() => setIsFocusedHouse(true)}
                        />
                      </>
                    )}
                    name="house"
                  />
                  {/* error message */}
                  {errors.house && (
                    <View style={styles.validationBanner}>
                      <Text
                        style={{
                          color: Colors.danger,
                          fontSize: 12,
                        }}
                      >
                        {errors.house.message}
                      </Text>
                    </View>
                  )}
                </>
                {/* Busstop */}
                {true && (
                  <>
                    <Controller
                      control={control}
                      rules={{
                        required: 'Bus stop is required',
                      }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <>
                          <TextInput
                            autoCapitalize="none"
                            keyboardType="default"
                            inputMode="text"
                            style={[
                              styles.textInput,
                              isFocusedBusStop && styles.inputFocused,
                            ]}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Closest bus stop"
                            placeholderTextColor={'#838282'}
                            onBlur={() => {
                              onBlur();
                              setIsFocusedBusStop(false);
                            }}
                            onFocus={() => setIsFocusedBusStop(true)}
                          />
                        </>
                      )}
                      name="bus_stop"
                    />
                    {/* error message */}
                    {errors.bus_stop && (
                      <View style={styles.validationBanner}>
                        <Text
                          style={{
                            color: Colors.danger,
                            fontSize: 12,
                          }}
                        >
                          {errors.bus_stop.message}
                        </Text>
                      </View>
                    )}
                  </>
                )}
                {/* Landmark§ */}
                <>
                  <Controller
                    control={control}
                    rules={{
                      required: 'Landmark is required',
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <>
                        <TextInput
                          autoCapitalize="none"
                          keyboardType="default"
                          inputMode="text"
                          style={[
                            styles.textInput,
                            isFocusedLandmarks && styles.inputFocused,
                          ]}
                          onChangeText={onChange}
                          value={value}
                          placeholder="Landmarks"
                          placeholderTextColor={'#838282'}
                          onBlur={() => {
                            onBlur();
                            setIsFocusedLandmarks(false);
                          }}
                          onFocus={() => setIsFocusedLandmarks(true)}
                        />
                      </>
                    )}
                    name="landmarks"
                  />
                  {/* error message */}
                  {errors.landmarks && (
                    <View style={styles.validationBanner}>
                      <Text
                        style={{
                          color: Colors.danger,
                          fontSize: 12,
                        }}
                      >
                        {errors.landmarks.message}
                      </Text>
                    </View>
                  )}
                </>
              </>
            )}
          </View>
        </View>
      )}

      {whenDue && (
        <>
          {/* //When do you need this done */}
          <View
            style={{
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontFamily: 'AvenirLight',
                fontSize: 16,
                marginBottom: 10,
              }}
            >
              When do you need this done?
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{
                  backgroundColor: '#f5f5f5',
                  paddingHorizontal: 10,
                  paddingVertical: 7,
                  borderRadius: 4,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Checkbox
                  style={[
                    styles.checkbox,
                    { borderWidth: 2, borderColor: '#c7c7c7' },
                  ]}
                  value={isOnDate}
                  onValueChange={() => {
                    setIsOnDate(true);
                    setIsFlexible(false);
                    setSpeccifics(false);
                    setIsFinal(false);
                  }}
                  color={isOnDate ? Colors.primary : undefined}
                />
                <Text
                  style={{
                    fontFamily: 'AvenirMedium',
                    fontSize: 16,
                    marginLeft: 6,
                  }}
                >
                  On date
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#f5f5f5',
                  paddingHorizontal: 10,
                  paddingVertical: 7,
                  marginLeft: 13,
                  borderRadius: 4,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Checkbox
                  style={[
                    styles.checkbox,
                    { borderWidth: 2, borderColor: '#c7c7c7' },
                  ]}
                  value={isFlexible}
                  onValueChange={() => {
                    setIsFlexible(true);
                    setOnDateTiming(false);
                    setIsOnDate(false);
                    setIsFinal(true);
                    setSpeccifics(false);
                  }}
                  color={isFlexible ? Colors.primary : undefined}
                />
                <Text
                  style={{
                    fontFamily: 'AvenirMedium',
                    fontSize: 16,
                    marginLeft: 6,
                  }}
                >
                  I'm Flexible
                </Text>
              </View>
            </View>
          </View>
        </>
      )}

      {isOnDate && (
        <>
          <>
            <TouchableWithoutFeedback onPress={() => setShow(!show)}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',

                  backgroundColor: '#F5F5F5',
                  borderRadius: 8,
                  borderWidth: show ? 1.5 : 0,
                  borderColor: Colors.primary,
                  padding: 16,
                  paddingVertical: 14,
                  marginBottom: 20,
                }}
              >
                <View>
                  {selectedDate ? (
                    <Text
                      style={{
                        color: Colors.text,
                        fontSize: 14,
                      }}
                    >
                      {' '}
                      {moment(selectedDate).format('DD - MM - YYYY')}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        color: '#9095A1',
                        fontSize: 14,
                      }}
                    >
                      Select date
                    </Text>
                  )}
                </View>
                <DateIcon />
              </View>
            </TouchableWithoutFeedback>
          </>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              onChange={onChange}
              style={{ marginBottom: 200 }}
              minimumDate={new Date()}
              // accentColor={Colors.orange}
              display={Platform.OS === 'ios' ? 'inline' : 'calendar'}
            />
          )}
        </>
      )}

      {isFlexible && (
        <View
          style={{
            borderRadius: 4,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Checkbox
            style={[
              styles.checkboxSmall,
              { borderWidth: 2, borderColor: '#c7c7c7' },
            ]}
            value={specifics}
            onValueChange={setSpeccifics}
            color={specifics ? Colors.primary : undefined}
          />
          <Text
            style={{
              fontFamily: 'AvenirMedium',
              fontSize: 14,
              marginLeft: 4,
            }}
          >
            I need a certain time of day
          </Text>
        </View>
      )}

      {onDateTiming && (
        <View
          style={{
            borderRadius: 4,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Checkbox
            style={[
              styles.checkboxSmall,
              { borderWidth: 2, borderColor: '#c7c7c7' },
            ]}
            value={specifics}
            onValueChange={setSpeccifics}
            color={specifics ? Colors.primary : undefined}
          />
          <Text
            style={{
              fontFamily: 'AvenirMedium',
              fontSize: 14,
              marginLeft: 4,
            }}
          >
            I need a certain time of day
          </Text>
        </View>
      )}

      {specifics && (
        <View style={{ marginTop: 20, marginBottom: 10 }}>
          {timeCards.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => {
                setTimeMode(item.id);
                setIsFinal(true);
              }}
            >
              <View
                style={{
                  width: '100%',
                  backgroundColor:
                    timeMode === item.id ? Colors.primary : '#F5F5F5',
                  paddingHorizontal: 10,
                  paddingVertical: 14,
                  borderRadius: 8,
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {item.id === 1 ? (
                    <MorningIcon
                      color={timeMode === 1 ? Colors.primary : '#292D32'}
                    />
                  ) : item.id === 2 ? (
                    <AfterNoonIcon
                      color={timeMode === 2 ? Colors.primary : '#292D32'}
                    />
                  ) : item.id === 3 ? (
                    <EveningIcon
                      color={timeMode === 3 ? Colors.primary : '#292D32'}
                    />
                  ) : (
                    <TwentyFourIcon
                      color={timeMode === 4 ? Colors.primary : '#292D32'}
                    />
                  )}
                </View>
                <View
                  style={{
                    marginTop: 12,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <View style={{}}>
                    <Text
                      style={{
                        fontFamily: 'HelveticaNeueBold',
                        fontSize: 14,
                        lineHeight: 17.09,
                        marginBottom: 4,
                        color: timeMode === item.id ? 'white' : '#292D32',
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'AvenirMedium',
                        fontSize: 12,
                        lineHeight: 16.39,
                        color: timeMode === item.id ? 'white' : '#292D32',
                      }}
                    >
                      {item.description}{' '}
                      <Text
                        style={{
                          fontFamily: 'AvenirBold',
                        }}
                      >
                        {item.timeRange}
                      </Text>
                    </Text>
                  </View>
                  {/* //Checkbox */}
                  {timeMode === item.id ? (
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 50,
                        borderWidth: 1,
                        borderColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <View
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: 50,
                          backgroundColor: '#fff',
                        }}
                      />
                    </View>
                  ) : (
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: '#DBDBDB',
                      }}
                    />
                  )}
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      )}

      {isFinal && (
        <Pressable
          style={{
            width: '100%',
            backgroundColor: Colors.primary,
            paddingVertical: 16,
            marginTop: 107,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            marginBottom: 100,
          }}
        >
          <Text style={{ fontFamily: 'AvenirBold', color: 'white' }}>
            Continue
          </Text>
        </Pressable>
      )}
    </ScrollView>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    borderWidth: 0,
    paddingHorizontal: 16,
    marginBottom: 8,
    color: Colors.text,
    fontSize: 12,
  },
  textInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    borderWidth: 0,
    padding: 16,
    paddingVertical: 14,
    marginBottom: 8,
    color: Colors.text,
    fontSize: 14,
  },
  validationBanner: {
    paddingHorizontal: 8,
    marginTop: -10,
    paddingBottom: 8,
  },
  checkbox: {
    width: 18,
    height: 18,
  },
  checkboxSmall: {
    width: 15,
    height: 15,
  },
  inputFocused: {
    borderColor: Colors.primary,
    borderWidth: 1.5,
  },
});
